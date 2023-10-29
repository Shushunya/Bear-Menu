from django.db import models
from validators.product_validators import validate_cost, validate_calories


class Meal(models.TextChoices):
    BREAKFAST = "breakfast"
    LUNCH = "lunch"
    DINNER = "dinner"
    TEA = "tea"
    ELEVENSES = "elevenses"


class DishType(models.TextChoices):
    SALAD = "salad"
    SOUP = "soup"
    PASTA = "pasta"
    DOUGH = "dough"
    STEW = "stew"
    VEGSIDES = "vegetable sides"
    SANDWICH = "sandwich"
    SAUCE = "sauce"
    DRINK = "drink"


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


class Product(models.Model):
    name = models.CharField(max_length=200, default="product", unique=True)
    p_type = models.CharField(
        max_length=10,
        choices=ProductType.choices
    )
    calories = models.FloatField(default=0.0, validators=[validate_calories])
    cost = models.FloatField(default=0.0, validators=[validate_cost])


class Receipt(models.Model):
    name = models.CharField(max_length=255, default="receipt")
    complexity = models.IntegerField(default=1)
    additional = models.ManyToManyField('self', symmetrical=False, blank=True)
    portions = models.IntegerField(null=True, blank=True)
    meal = models.CharField(choices=Meal.choices, blank=True, null=True, max_length=10)
    dish_type = models.CharField(choices=DishType.choices, null=True, blank=True, max_length=20)

    def __str__(self):
        return self.name


class Instruction(models.Model):
    text = models.CharField(max_length=255)
    time = models.FloatField(default=0.0)
    is_prep = models.BooleanField(default=False)
    receipt = models.ForeignKey(Receipt, on_delete=models.CASCADE, related_name="instruction")


class Ingredient(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    # Many-to-one
    receipt = models.ForeignKey(Receipt, on_delete=models.PROTECT)
    amount = models.FloatField(default=0.0)
