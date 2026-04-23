export const DAYS = [
  { key: "monday", label: "Mandag" },
  { key: "tuesday", label: "Tisdag" },
  { key: "wednesday", label: "Onsdag" },
  { key: "thursday", label: "Torsdag" },
  { key: "friday", label: "Fredag" },
  { key: "saturday", label: "Lordag" },
  { key: "sunday", label: "Sondag" },
];

export const CATEGORIES = [
  { key: "booking", label: "Bokning", css: "category-booking", color: "#8c98a3" },
  { key: "public", label: "Allmanhet", css: "category-public", color: "#35b27b" },
  { key: "team", label: "Lagtraning", css: "category-team", color: "#36a0d6" },
  { key: "maintenance", label: "Isvard", css: "category-maintenance", color: "#9aa3af" },
  { key: "match", label: "Match", css: "category-match", color: "#ec5d82" },
  { key: "school", label: "Skola", css: "category-school", color: "#b471ea" },
  { key: "event", label: "Event", css: "category-event", color: "#eca437" },
];

export const DEFAULT_WEEKS = [
  {
    id: "week-17",
    label: "Vecka 17",
    subtitle: "22 april - 28 april",
    sort_order: 17,
    days: {
      monday: [
        { start: "06:00", end: "08:00", title: "Bokningsbar is", category: "booking" },
        { start: "08:15", end: "11:00", title: "Skolskridskor", category: "school", team: "U11" },
        { start: "16:00", end: "18:00", title: "Lagtraning", category: "team", team: "U14" },
        { start: "18:15", end: "20:00", title: "Allman akning", category: "public" },
      ],
      tuesday: [
        { start: "07:00", end: "08:30", title: "Bokningsbar is", category: "booking" },
        { start: "10:00", end: "11:30", title: "Isvard", category: "maintenance" },
        { start: "16:30", end: "18:30", title: "Lagtraning", category: "team", team: "U16" },
        { start: "19:00", end: "21:00", title: "Matchforberedelse", category: "match", team: "VR A-lag" },
      ],
      wednesday: [
        { start: "08:00", end: "10:00", title: "Skolpass", category: "school", team: "U10" },
        { start: "10:30", end: "12:00", title: "Bokningsbar is", category: "booking" },
        { start: "15:30", end: "17:00", title: "Lagtraning", category: "team", team: "U12" },
        { start: "18:00", end: "21:00", title: "Sponsor-event pa is", category: "event" },
      ],
      thursday: [
        { start: "06:30", end: "08:30", title: "Bokningsbar is", category: "booking" },
        { start: "12:00", end: "13:00", title: "Isvard", category: "maintenance" },
        { start: "16:00", end: "18:00", title: "Lagtraning", category: "team", team: "BJ" },
        { start: "18:30", end: "20:30", title: "Allman akning", category: "public" },
      ],
      friday: [
        { start: "08:00", end: "10:00", title: "Skolpass", category: "school", team: "U9" },
        { start: "13:00", end: "15:00", title: "Bokningsbar is", category: "booking" },
        { start: "17:00", end: "19:30", title: "Lagtraning", category: "team", team: "VR A-lag" },
        { start: "20:00", end: "22:00", title: "Helgmatch", category: "match", team: "VR A-lag" },
      ],
      saturday: [
        { start: "09:00", end: "11:00", title: "Hockeyskola", category: "team", team: "U8" },
        { start: "11:30", end: "13:00", title: "Familjeakning", category: "public" },
        { start: "14:00", end: "16:00", title: "Cupmatch", category: "match", team: "U15" },
      ],
      sunday: [
        { start: "10:00", end: "12:00", title: "Bokningsbar is", category: "booking" },
        { start: "13:00", end: "15:00", title: "Veterantraning", category: "team", team: "Oldtimers" },
        { start: "16:00", end: "18:00", title: "Allman akning", category: "public" },
      ],
    },
  },
  {
    id: "week-18",
    label: "Vecka 18",
    subtitle: "29 april - 5 maj",
    sort_order: 18,
    days: {
      monday: [
        { start: "06:00", end: "07:30", title: "Bokningsbar is", category: "booking" },
        { start: "08:00", end: "11:00", title: "Skolskridskor", category: "school", team: "U11" },
        { start: "17:00", end: "19:00", title: "Lagtraning", category: "team", team: "U13" },
      ],
      tuesday: [
        { start: "08:00", end: "10:00", title: "Bokningsbar is", category: "booking" },
        { start: "10:15", end: "11:00", title: "Isvard", category: "maintenance" },
        { start: "18:00", end: "20:00", title: "Allman akning", category: "public" },
      ],
      wednesday: [
        { start: "09:00", end: "11:30", title: "Skolpass", category: "school", team: "U10" },
        { start: "15:00", end: "17:30", title: "Lagtraning", category: "team", team: "U14" },
        { start: "18:00", end: "20:30", title: "Evenemang pa is", category: "event" },
      ],
      thursday: [
        { start: "07:00", end: "09:00", title: "Bokningsbar is", category: "booking" },
        { start: "16:30", end: "18:30", title: "Lagtraning", category: "team", team: "BJ" },
        { start: "19:00", end: "21:00", title: "Traningsmatch", category: "match", team: "U16" },
      ],
      friday: [
        { start: "08:00", end: "09:30", title: "Isvard", category: "maintenance" },
        { start: "13:00", end: "15:00", title: "Bokningsbar is", category: "booking" },
        { start: "17:30", end: "20:00", title: "Lagtraning", category: "team", team: "VR A-lag" },
      ],
      saturday: [
        { start: "09:00", end: "11:00", title: "Camp med ungdomslag", category: "event", team: "U12" },
        { start: "12:00", end: "14:00", title: "Allman akning", category: "public" },
        { start: "15:00", end: "17:00", title: "Match", category: "match", team: "VR A-lag" },
      ],
      sunday: [
        { start: "10:00", end: "12:00", title: "Bokningsbar is", category: "booking" },
        { start: "13:00", end: "15:00", title: "Lagtraning", category: "team", team: "Oldtimers" },
      ],
    },
  },
  {
    id: "week-19",
    label: "Vecka 19",
    subtitle: "6 maj - 12 maj",
    sort_order: 19,
    days: {
      monday: [
        { start: "07:00", end: "09:00", title: "Bokningsbar is", category: "booking" },
        { start: "16:00", end: "18:00", title: "Lagtraning", category: "team", team: "U15" },
        { start: "18:30", end: "20:00", title: "Allman akning", category: "public" },
      ],
      tuesday: [
        { start: "08:00", end: "10:30", title: "Skolpass", category: "school", team: "U9" },
        { start: "11:00", end: "12:00", title: "Isvard", category: "maintenance" },
        { start: "17:00", end: "20:00", title: "Lagtraning", category: "team", team: "VR A-lag" },
      ],
      wednesday: [
        { start: "06:00", end: "08:30", title: "Bokningsbar is", category: "booking" },
        { start: "14:00", end: "16:30", title: "Camp pa is", category: "event", team: "U11" },
        { start: "18:00", end: "20:00", title: "Traningsmatch", category: "match", team: "U14" },
      ],
      thursday: [
        { start: "08:00", end: "10:00", title: "Bokningsbar is", category: "booking" },
        { start: "16:00", end: "18:00", title: "Lagtraning", category: "team", team: "BJ" },
      ],
      friday: [
        { start: "09:00", end: "10:30", title: "Isvard", category: "maintenance" },
        { start: "11:00", end: "13:00", title: "Skolpass", category: "school", team: "U12" },
        { start: "18:00", end: "21:00", title: "Matchkvall", category: "match", team: "VR A-lag" },
      ],
      saturday: [
        { start: "10:00", end: "12:00", title: "Familjeakning", category: "public" },
        { start: "13:00", end: "15:00", title: "Lagtraning", category: "team", team: "U8" },
      ],
      sunday: [
        { start: "11:00", end: "13:00", title: "Bokningsbar is", category: "booking" },
        { start: "14:00", end: "16:00", title: "Veterantraning", category: "team", team: "Oldtimers" },
      ],
    },
  },
];
