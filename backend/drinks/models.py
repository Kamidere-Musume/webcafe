from django.db import models

# Create your models here.
DRINK_QUANTITIES = [
    (12, "12 OZ"),
    (20, "20 OZ"),
]
DRINK_TYPE = [("w", "warm"), ("c", "cold")]


class Drink(models.Model):
    title = models.CharField(max_length=50, help_text="Title for the drink")
    description = models.TextField(help_text="A Description of the drink")
    price = models.PositiveBigIntegerField(help_text="Price of the drink.")
    quantity = models.PositiveIntegerField(
        choices=DRINK_QUANTITIES, help_text="Quantity of the dirnk in ounces."
    )
    coffee_type = models.CharField(max_length=20, help_text="Type of coffee")
    img = models.URLField(max_length=250, help_text="A url to the images")
    hotness_type = models.CharField(max_length=1, choices=DRINK_TYPE)

    def __str__(self):
        return f'{self.title} for {self.price} / {self.quantity}'
