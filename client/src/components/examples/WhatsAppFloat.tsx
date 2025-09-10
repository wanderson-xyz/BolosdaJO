import WhatsAppFloat from '../WhatsAppFloat';

export default function WhatsAppFloatExample() {
  return (
    <div className="relative h-96 bg-muted/30">
      <p className="p-4 text-center text-muted-foreground">
        O botão flutuante do WhatsApp aparece no canto inferior direito
      </p>
      <WhatsAppFloat />
    </div>
  );
}