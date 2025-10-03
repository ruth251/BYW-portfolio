import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Globe } from "lucide-react";
import greenbg from "@/assets/greenbg.jpg";
import agroimg from "@/assets/agroimg.jpg";
import MissionVision from "@/components/sections/MissionVision";



const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Quality First",
      description: "We source only the highest quality products from globally recognized manufacturers."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Focus",
      description: "Our customers' success is our success. We provide comprehensive support and expertise."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Reliability",
      description: "With years of experience, we've built a reputation for consistent, dependable service."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Innovation",
      description: "We continuously seek innovative solutions to meet evolving agricultural challenges."
    }
  ];

  return (
    <div className="min-h-screen">
     {/* Hero Section */}
<section 
  className="py-20 bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center text-center px-4"
  style={{ backgroundImage: `url(${greenbg})` }}
>
  <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
    About Us
  </h1>
  <p className="text-xl text-black max-w-3xl mx-auto">
    Discover the story behind Welin, Bnosha, and Yabon - three sister companies united by a shared commitment to agricultural and veterinary excellence.
  </p>
</section>


      {/* Company Overview */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      
      {/* Left Side - Text */}
      <div>
        <h2 className="text-4xl font-bold text-foreground mb-8 text-left">
          Our Story
        </h2>
        <div className="space-y-6 text-left">
          <p className="text-lg text-muted-black leading-relaxed">
            <span className="font-bold text-primary">Welin, Bnosha, and Yabon</span> are more than just sister companies  
            we are a united force transforming agriculture and veterinary care. 
            With decades of combined expertise, we’ve built a bridge between 
            global innovation and local farming communities.
          </p>
          <p className="text-lg text-muted-black leading-relaxed">
            From <span className="font-medium">crop protection</span> to 
            <span className="font-medium"> animal health</span>, our integrated 
            approach ensures that farmers, veterinarians, and agribusinesses 
            have access to reliable solutions under one roof. 
          </p>
          <p className="text-lg text-muted-black leading-relaxed">
            Today, we proudly serve <span className="font-semibold">1,000+ customers</span> across the region  
            delivering trusted products, expert guidance, and innovative tools 
            that shape a more sustainable future for food and farming.
          </p>
        </div>
      </div>

{/* Right Side - Image */}
<div className="flex justify-center">
  <img 
    src={agroimg} 
    alt="Our Story" 
    className="rounded-2xl shadow-lg w-full h-auto max-w-[550px] object-cover" 
  />
</div>

    </div>
  </div>
</section>


    <section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <MissionVision />
  </div>
</section>


      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4"> 
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-black max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as an organization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our Companies in Detail
            </h2>
            <p className="text-xl text-muted-black max-w-3xl mx-auto">
              Each of our sister companies brings specialized expertise to serve different aspects 
              of the agricultural and veterinary sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Welin</h3>
                <p className="text-muted-black mb-4">
                  <strong>Specialization:</strong> Advanced agrochemical solutions
                </p>
                <p className="text-muted-black leading-relaxed">
                  Welin focuses on providing cutting-edge agrochemical products for crop protection 
                  and yield enhancement. Our portfolio includes insecticides, herbicides, fungicides, 
                  and plant growth regulators from leading global manufacturers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Bnosha</h3>
                <p className="text-muted-black mb-4">
                  <strong>Specialization:</strong> Veterinary pharmaceutical distribution
                </p>
                <p className="text-muted-black leading-relaxed">
                  Bnosha leads our veterinary division, offering comprehensive animal health solutions 
                  including antibiotics, vaccines, dewormers, vitamins, and specialized veterinary 
                  medicines for livestock and companion animals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Yabon</h3>
                <p className="text-muted-black mb-4">
                  <strong>Specialization:</strong> Agricultural inputs and technical support
                </p>
                <p className="text-muted-black leading-relaxed">
                  Yabon provides innovative agricultural inputs and comprehensive technical support 
                  for modern farming practices. We offer fertilizers, seeds, farming equipment, 
                  and expert consultation services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;