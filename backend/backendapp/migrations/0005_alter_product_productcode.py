# Generated by Django 3.2 on 2021-07-20 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backendapp', '0004_auto_20210427_2000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='productCode',
            field=models.IntegerField(default=0),
        ),
    ]
