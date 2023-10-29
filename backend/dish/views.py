from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from django_filters import rest_framework as filters
from .models import Product, Receipt
from .serializers import ProductSerializer, ReceiptSerializer
from .filters import ProductFilter


class ProductList(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (filters.DjangoFilterBackend, )
    filterset_class = ProductFilter


class ProductDetail(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ReceiptList(ListCreateAPIView):
    queryset = Receipt.objects.all()
    serializer_class = ReceiptSerializer


class ReceiptDetail(RetrieveUpdateDestroyAPIView):
    queryset = Receipt.objects.all()
    serializer_class = ReceiptSerializer
