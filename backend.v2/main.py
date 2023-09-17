from sqlmodel import Session, select, create_engine, SQLModel
from fastapi import FastAPI, HTTPException, Query, Depends
from schemas.products import ProductCreate, ProductRead, ProductUpdate
from models.products import Product
from typing import List

sqlite_file_name = "menu.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, echo=True, connect_args=connect_args)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

app = FastAPI()

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

@app.post("/products/", response_model=ProductRead)
def create_product(*, session: Session = Depends(get_session), product: ProductCreate):
    # with Session(engine) as session:
    db_product = Product.from_orm(product)
    session.add(db_product)
    session.commit()
    session.refresh(db_product)
    return db_product
    

@app.get("/products/", response_model=List[ProductRead])
def read_products(*, session: Session = Depends(get_session), offset: int=0, limit: int=Query(default=100, lte=100)):
    # with Session(engine) as session:
    products = session.exec(select(Product).offset(offset).limit(limit)).all()
    return products

@app.get("/products/{product_id}", response_model=ProductRead)
def read_product(*, session: Session = Depends(get_session), product_id: int):
    # with Session(engine) as session:
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@app.put("/products/{product_id}", response_model=ProductRead)
def update_product(*, session: Session = Depends(get_session), product_id: int, product: ProductUpdate):
    # with Session(engine) as session:
    db_product = session.get(Product, product_id)
    if not db_product:
        raise HTTPException(status_code=404, detail="Product not found")
    product_data = product.dict(exclude_unset=True)
    for key, value in product_data.items():
        setattr(db_product, key, value)
    session.add(db_product)
    session.commit()
    session.refresh(db_product)
    return db_product

@app.delete("/products/{product_id}")
def delete_product(*, session: Session = Depends(get_session), product_id: int):
    # with Session(engine) as session:
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    session.delete(product)
    session.commit()
    return {"ok": True}