from drinks.models import Drink
import json


def run():
    with open("drinks/db.json") as f:
        data = json.load(f)

    Drink.objects.all().delete()
    for t in data:
        for drink in data[t]:
            prices = drink["price"].split("/")
            for index,price in enumerate(prices):
                title = drink["title"].strip()
                desc = drink["description"].strip()
                print(price)
                price = float(price.strip()[1:])
                if index == 0:
                    quantity = 12
                else:
                    quantity = 20
                coffee_type = drink["type"].strip()
                img = drink["img"].strip()
                if t == "warm-drinks":
                    hotness_type = "w"
                else:
                    hotness_type = "c"

                d =Drink(title=title, description=desc, price=price, quantity=quantity,coffee_type=coffee_type,hotness_type=hotness_type,img=img)
                d.save()
            # print(title,desc,quantity,coffee_type,img,hotness_type)
