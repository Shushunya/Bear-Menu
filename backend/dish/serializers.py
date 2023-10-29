from rest_framework.serializers import ModelSerializer
from .models import Product, Ingredient, Instruction, Receipt


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class IngredientSerializer(ModelSerializer):
    class Meta:
        model = Ingredient
        fields = "__all__"


class InstructionSerializer(ModelSerializer):
    class Meta:
        model = Instruction
        fields = "__all__"


class ReceiptSerializer(ModelSerializer):
    class Meta:
        model = Receipt
        fields = "__all__"
