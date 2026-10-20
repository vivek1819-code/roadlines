export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Track", href: "/track" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    number: "01",
    title: "Full truckload",
    short: "A vehicle for your shipment, with direct routing and fewer handling points.",
    detail: "Dedicated vehicles for large, time-sensitive or high-volume loads. Choose a body type and route around your cargo, loading window and delivery deadline.",
    icon: "truck",
    tag: "FTL",
  },
  {
    number: "02",
    title: "Part truckload",
    short: "Share the space. Keep your smaller consignments moving efficiently.",
    detail: "Combine compatible consignments in a planned lane to make better use of vehicle capacity. Useful for regular dispatches that do not need a full truck.",
    icon: "boxes",
    tag: "PTL / LTL",
  },
  {
    number: "03",
    title: "Express delivery",
    short: "Priority movement for urgent cargo and tighter delivery windows.",
    detail: "Priority pickup and dispatch coordination for urgent consignments. Share the delivery deadline early so the team can check route availability.",
    icon: "zap",
    tag: "PRIORITY",
  },
  {
    number: "04",
    title: "Warehousing",
    short: "Flexible short-term storage to support your next move.",
    detail: "Short-term storage and dispatch coordination for goods between legs of a journey. Space, handling and location are confirmed against each requirement.",
    icon: "warehouse",
    tag: "STORAGE",
  },
];

export const modeGuides = [
  {
    title: "Road freight",
    label: "FTL · PTL · LTL",
    description: "Flexible point-to-point movement for palletised, bulk and full-vehicle cargo.",
    limit: "Planning guide: 100 kg to 28,000 kg; vehicle and load dimensions vary by route.",
    icon: "truck",
  },
  {
    title: "Air cargo",
    label: "TIME-CRITICAL",
    description: "Priority air movement for urgent, high-value or long-distance consignments.",
    limit: "Planning guide: 1 kg to 5,000 kg per booking; carrier size limits apply.",
    icon: "plane",
  },
  {
    title: "Ocean shipping",
    label: "LCL · FCL",
    description: "Container options for international cargo, from shared loads to full containers.",
    limit: "Planning guide: LCL or 20 ft / 40 ft containers; confirm cargo and port limits.",
    icon: "ship",
  },
  {
    title: "Local courier",
    label: "LAST MILE",
    description: "Local pickup and delivery for parcels that need a simple final mile.",
    limit: "Planning guide: 0.5 kg to 50 kg per parcel; parcel dimensions vary by service.",
    icon: "package",
  },
];

export const cities = ["Mumbai", "Pune", "Ahmedabad", "Bengaluru", "Hyderabad", "Chennai", "Delhi"];
