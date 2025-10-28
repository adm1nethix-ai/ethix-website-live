import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210";
    const message = encodeURIComponent("Hi, I would like to inquire about your consultancy services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-xl bg-[hsl(142_70%_45%)] text-white border-2 border-white flex items-center justify-center hover-elevate active-elevate-2 animate-pulse"
      data-testid="button-whatsapp-floating"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}
