from django.urls import path
from .views import ProductList, ProductDetail, ReceiptList, ReceiptDetail

app_name = "dishes"

urlpatterns = [
    path('products/', ProductList.as_view(), name="product-list"),
    path('products/<int:pk>/', ProductDetail.as_view(), name="product-detail"),
    path("receipts/", ReceiptList.as_view(), name="receipt-list"),
    path("receipts/<int:pk>/", ReceiptDetail.as_view(), name="receipt-detail"),
]
