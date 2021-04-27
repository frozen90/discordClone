# Generated by Django 3.2 on 2021-04-27 19:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backendapp', '0003_product_qty'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='productCode',
            field=models.IntegerField(default=123456789),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='staff',
            name='initials',
            field=models.CharField(default='PYC', max_length=4),
            preserve_default=False,
        ),
    ]
