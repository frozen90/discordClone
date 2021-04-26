from django.contrib import admin
from .models import Staff, Supplier, Product, ProductGroup, Brand
# Register your models here.

admin.site.register(Staff)
admin.site.register(Supplier)
admin.site.register(Product)
admin.site.register(ProductGroup)
admin.site.register(Brand)