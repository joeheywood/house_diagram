library(tibble)

dgrm <- tribble(
  ~room,       ~wall, ~startx, ~starty, ~endx, ~endy,
  "dining room", "S", 1.4,     12.9,    5.6,   12.9,
  "dining room", "E", 1.4,     8.7,     1.4,   12.9,
  "dining room", "W", 5.6,     12.9,    5.6,   8.7,
  "dining room", "N", 5.6,     8.7,     1.4,   8.7,
  "living room", "S", 1.4,     8.7,     5.2,   8.7,
  "living room", "E", 1.4,     3.4,     1.4,   8.7,
  "living room", "W", 5.2,     8.7,     5.2,   3.4,
  "living room", "N", 5.2,     3.4,     1.4,   3.4,
)