from django.core.exceptions import ValidationError


def validate_cost(cost: float):
    if cost < 0.0:
        raise ValidationError("Cost must be a positive number.")


def validate_calories(cost: float):
    if cost < 0.0:
        raise ValidationError("Calories must be a positive number.")
