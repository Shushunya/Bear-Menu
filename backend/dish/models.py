from django.db import models
from validators.product_validators import validate_cost, validate_calories


class Product(models.Model):
    class ProductType(models.TextChoices):
        MEAT = "meat"
        FISH = "fish"
        VEGETABLE = "vegetable"
        FRUIT = "fruit"
        NUT = "nut"
        LIQUID = "liquid"
        EGGS = "eggs"
        DIARY = "diary"
        CEREALS = "cereals"
        OIL = "oil"

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200, default="product", unique=True)
    type = models.CharField(
        max_length=10,
        choices=ProductType.choices
    )
    calories = models.FloatField(default=0.0, validators=[validate_calories])
    cost = models.FloatField(default=0.0, validators=[validate_cost])
