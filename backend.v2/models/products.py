from schemas.products import ProductBase
from typing import Optional
from sqlmodel import Field

class Product(ProductBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)

