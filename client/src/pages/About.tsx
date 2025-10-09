import StatCounter from '@/components/StatCounter';
import chefImage from '@assets/stock_images/indian_chef_cooking__8f8e3120.jpg';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 font-[Poppins]" data-testid="text-about-title">
            About Salem RR Biryani Unavagam
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img
                src={chefImage}
                alt="Our Chef"
                className="w-full h-[400px] object-cover rounded-xl shadow-xl"
                data-testid="img-chef"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 font-[Poppins]">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 font-[Roboto]">
                For over two decades, Salem RR Biryani Unavagam has been serving the authentic taste of Tamil Nadu to
                food lovers across the region. What started as a small family venture has grown into a beloved
                restaurant chain, known for its traditional cooking methods and unwavering commitment to quality.
              </p>
              <p className="text-lg text-muted-foreground mb-4 font-[Roboto]">
                Our secret lies in using the finest ingredients, time-honored recipes passed down through generations,
                and the passion of our expert chefs who treat every dish as a masterpiece.
              </p>
              <p className="text-lg text-muted-foreground font-[Roboto]">
                We believe that great food brings people together, and every plate we serve is prepared with love and
                respect for our culinary heritage.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-12 font-[Poppins]">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCounter end={20} label="Years of Tradition" suffix="+" />
              <StatCounter end={50000} label="Happy Customers" suffix="+" />
              <StatCounter end={15} label="Branches Across Tamil Nadu" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
