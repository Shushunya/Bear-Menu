from django_filters import rest_framework as filters
from .models import Product


class ProductFilter(filters.FilterSet):
    class Meta:
        model = Product
        fields = {
            'name': ['icontains'],
            'cost': ['lt', 'gt'],
            'calories': ['lt', 'gt'],
            'type': ['exact']
        }
