from typing import Optional
from sqlmodel import SQLModel, Field


class ProductBase(SQLModel):
    name: str = Field(index=True, unique=True)
    calories: Optional[float] = None
    cost: Optional[float] = None


class ProductCreate(ProductBase):
    pass


class ProductUpdate(ProductBase):
    name: Optional[str] = None
    

class ProductRead(ProductBase):
    id: int