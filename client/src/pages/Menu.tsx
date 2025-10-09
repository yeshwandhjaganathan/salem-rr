import { useState } from 'react';
import MenuCard from '@/components/MenuCard';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import dish1 from '@assets/stock_images/indian_food_dishes_v_e26f1487.jpg';
import dish2 from '@assets/stock_images/indian_food_dishes_v_493acf0a.jpg';
import dish3 from '@assets/stock_images/indian_food_dishes_v_491fe692.jpg';
import dish4 from '@assets/stock_images/indian_food_dishes_v_093b04f7.jpg';
import dish5 from '@assets/stock_images/indian_food_dishes_v_4f5f7261.jpg';
import dish6 from '@assets/stock_images/indian_food_dishes_v_6462d5d7.jpg';

export default function Menu() {
  const [showFullMenu, setShowFullMenu] = useState(false);

  const menuItems = [
    { image: dish1, name: 'Special Chicken Biryani', description: 'Aromatic basmati rice with tender chicken', price: '350' },
    { image: dish2, name: 'Mutton Biryani', description: 'Slow-cooked mutton with fragrant rice', price: '450' },
    { image: dish3, name: 'Veg Biryani', description: 'Fresh vegetables with aromatic spices', price: '280' },
    { image: dish4, name: 'Chicken 65', description: 'Spicy fried chicken appetizer', price: '220' },
    { image: dish5, name: 'Paneer Tikka', description: 'Grilled cottage cheese with spices', price: '240' },
    { image: dish6, name: 'Fish Fry', description: 'Crispy fried fish with special masala', price: '300' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 font-[Poppins]" data-testid="text-menu-title">
            Our Menu
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg font-[Lexend_Deca]">
            Explore our delicious selection of authentic Tamil Nadu cuisine
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {menuItems.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8"
              onClick={() => setShowFullMenu(true)}
              data-testid="button-view-full-menu-modal"
            >
              View Complete Menu
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={showFullMenu} onOpenChange={setShowFullMenu}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <h3 className="text-2xl font-bold mb-6 font-[Poppins]">Complete Menu Card</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold mb-4 text-primary font-[Poppins]">Biryani Specials</h4>
              <div className="grid gap-4">
                {menuItems.slice(0, 3).map((item) => (
                  <div key={item.name} className="flex justify-between items-start border-b pb-3">
                    <div>
                      <h5 className="font-bold font-[Poppins]">{item.name}</h5>
                      <p className="text-sm text-muted-foreground font-[Roboto]">{item.description}</p>
                    </div>
                    <span className="text-chart-2 font-bold">₹{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-primary font-[Poppins]">Starters & Sides</h4>
              <div className="grid gap-4">
                {menuItems.slice(3).map((item) => (
                  <div key={item.name} className="flex justify-between items-start border-b pb-3">
                    <div>
                      <h5 className="font-bold font-[Poppins]">{item.name}</h5>
                      <p className="text-sm text-muted-foreground font-[Roboto]">{item.description}</p>
                    </div>
                    <span className="text-chart-2 font-bold">₹{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
