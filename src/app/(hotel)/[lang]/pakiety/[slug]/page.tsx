import Image from "next/image";
import { Container } from "@/components/container";
import { getOfferBySlug } from "@/sanity/lib/offers/getOfferBySlug";
import { getDictionary } from "@/lib/dictionary";
import { imageUrl } from "@/lib/imageUrl";
import { ArrowRight, Tag } from "lucide-react";

interface Params {
  lang: string;
  slug: string;
}

interface Offers {
  _id: string;
  enname: string;
  plname: string;
  endescription: any[];
  pldescription: any[];
  image: any;
  price?: number;
  currency?: string;
}

const OffersPageId = async ({ params }: { params: Params }) => {
  const { lang, slug } = params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch the offer data using the slug
  const offer = await getOfferBySlug(slug);

  // Function to get localized content
  const getLocalizedContent = (offer: Offers) => {
    const name = lang === "pl" ? offer.plname : offer.enname;
    const description =
      lang === "pl" ? offer.pldescription : offer.endescription;

    return {
      name: name || "No title available",
      description:
        description
          ?.map((block) =>
            block._type === "block"
              ? block.children?.map((child) => child.text).join("")
              : ""
          )
          .join("") || "No description available",
      price: offer.price || 0,
      currency: offer.currency || (lang === "pl" ? "PLN" : "USD"),
    };
  };

  // Get the localized content for the current offer
  const localizedContent = offer
    ? getLocalizedContent(offer)
    : {
        name: "Package Offer",
        description: "Details not available",
        price: 0,
        currency: lang === "pl" ? "PLN" : "USD",
      };

  // Format price with currency
  const formattedPrice = new Intl.NumberFormat(
    lang === "pl" ? "pl-PL" : "en-US",
    {
      style: "currency",
      currency: localizedContent.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  ).format(localizedContent.price);

  return (
    <main className="bg-gray-50 min-h-screen font-raleway">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary py-16 md:py-[280px]">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {localizedContent.name}
              </h1>

              <div className="flex items-center mb-6">
                <Tag className="mr-2 h-5 w-5" />
                <span className="text-2xl md:text-3xl font-bold text-white/95">
                  {formattedPrice}
                </span>
              </div>

              <p className="text-lg text-white/90 mb-6 line-clamp-3">
                {localizedContent.description}
              </p>

              <button className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-white/90 transition-colors">
                {dict?.common?.bookNow || "Book Now"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src={
                  offer?.image
                    ? imageUrl(offer.image).url()
                    : "/placeholder.svg"
                }
                alt={localizedContent.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <Container className="py-12 md:py-20">
        {offer ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {dict?.common?.offerDetails || "Offer Details"}
                </h2>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">
                    {dict?.common?.price || "Price"}:
                  </span>
                  <span className="text-xl font-bold text-primary">
                    {formattedPrice}
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {localizedContent.description}
                </p>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">
                {dict?.common?.interestedInOffer || "Interested in this offer?"}
              </h3>
              <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors">
                {dict?.common?.contactUs || "Contact Us"}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Offer not found.</p>
          </div>
        )}
      </Container>
    </main>
  );
};

export default OffersPageId;
