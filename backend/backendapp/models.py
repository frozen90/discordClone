from django.db import models
from django.contrib.auth.models import User
from django_countries.fields import CountryField
# Create your models here.

class Staff(models.Model):
    firstName = models.CharField(max_length=200)
    secondName = models.CharField(max_length=200)
    live = models.BooleanField(default=False)

    def __str__(self):
        return self.firstName + ' ' + self.secondName

class Supplier(models.Model):
    supplierName = models.CharField(max_length=50)
    suppilerAddress = models.CharField(max_length=100)
    supplierPostcode = models.CharField(max_length=7)
    supplierEmail = models.EmailField()
    supplierContactName = models.CharField(max_length=50)
    supplierCode = models.CharField(max_length=5)
    supplierCountry = CountryField()
    def __str__(self):
        return self.supplierName

class ProductGroup(models.Model):
    groupName = models.CharField(max_length=200)
    description = models.CharField(max_length=1024)

    def __str__(self):
        return self.groupName

class Product(models.Model):
    productName = models.CharField(max_length=200)
    description = models.CharField(max_length=1024)
    available = models.BooleanField(default=False)
    barcode = models.CharField(max_length=52)
    qty = models.IntegerField(default=0)
    group = models.ForeignKey(ProductGroup, on_delete=models.PROTECT)
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)

    def __str__(self):
        return self.productName


class Brand(models.Model):
    brandName = models.CharField(max_length=50)
    description = models.CharField(max_length=1024)
    brandSupplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    def __str__(self):
        return self.brandName








    