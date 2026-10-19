type BagArtwork = {
  background: string;
  body: string;
  silhouette: string;
  handle: string;
  strap?: string;
  seam: string;
  accent: string;
  detail: string;
};

const artwork: Record<string, BagArtwork> = {
  "sunday-tote": {
    background: "#efe5df", body: "#84636d",
    silhouette: "M246 352h308l34 381q2 27-24 27H236q-26 0-24-27l34-381Z",
    handle: "M326 351v-44a74 74 0 0 1 148 0v44",
    seam: "M253 390h294M256 724h288",
    accent: "#d9c29e", detail: "M278 522h244",
  },
  "market-tote": {
    background: "#e9e2d6", body: "#a37c62",
    silhouette: "M255 355h290l34 372q3 30-27 30H248q-30 0-27-30l34-372Z",
    handle: "M318 354v-52a82 82 0 0 1 164 0v52",
    seam: "M254 399h292M247 712h306",
    accent: "#e8d5b8", detail: "M290 523h220",
  },
  "atelier-shoulder": {
    background: "#e6dedc", body: "#684b58",
    silhouette: "M245 416q155-63 310 0l-12 239q-4 83-143 109-139-26-143-109l-12-239Z",
    handle: "M268 448c16-155 75-219 139-219s123 64 139 219",
    seam: "M256 458q144 53 288 0M248 694q152 42 304 0",
    accent: "#d9c39a", detail: "M373 524h54",
  },
  "muse-hobo": {
    background: "#e9e1da", body: "#8d7966",
    silhouette: "M245 438q155-78 310 0l-13 210q-7 94-142 124-135-30-142-124l-13-210Z",
    handle: "M271 431c30-115 75-163 129-163s99 48 129 163",
    seam: "M247 474q153 67 306 0M263 692q137 37 274 0",
    accent: "#d9c39a", detail: "M364 544h72",
  },
  "roamer-crossbody": {
    background: "#eee3e2", body: "#b4777c",
    silhouette: "M265 431q135-40 270 0l-15 274q-2 26-27 26H307q-25 0-27-26l-15-274Z",
    handle: "M283 404 219 252q-26-62 32-87l283-118q55-23 79 34l63 145",
    strap: "M219 256q130 160 157 280",
    seam: "M262 443h276M281 690h238",
    accent: "#d8bd8e", detail: "M328 500h144",
  },
  "daylight-sling": {
    background: "#e3e5dd", body: "#687568",
    silhouette: "M267 438q133-58 266 0l-11 267q-2 26-27 26H305q-25 0-27-26l-11-267Z",
    handle: "M284 417 218 264q-23-52 31-75l270-116q51-22 74 29l66 153",
    strap: "M218 267q133 147 163 274",
    seam: "M266 459q134 37 268 0M288 686h224",
    accent: "#d7bd8c", detail: "M368 530h64",
  },
  "gabrielle-satchel": {
    background: "#eee4de", body: "#9a5650",
    silhouette: "M247 422h306l-13 322q-1 22-24 22H284q-23 0-24-22l-13-322Z",
    handle: "M329 358v-49a71 71 0 0 1 142 0v49",
    strap: "M239 427q-66 131-31 309",
    seam: "M240 425h320M254 721h292",
    accent: "#dfc99f", detail: "M326 522h148",
  },
  "commuter-satchel": {
    background: "#e6e4dd", body: "#68736f",
    silhouette: "M255 423h290l-10 311q-1 21-22 21H287q-21 0-22-21l-10-311Z",
    handle: "M328 354v-42a72 72 0 0 1 144 0v42",
    strap: "M239 429q-69 136-32 309",
    seam: "M251 435h298M264 711h272",
    accent: "#d7bd8c", detail: "M345 529h110",
  },
  "little-hour": {
    background: "#eee2e7", body: "#8a6779",
    silhouette: "M307 433h186l-9 236q-1 20-21 20H337q-20 0-21-20l-9-236Z",
    handle: "M335 404v-71a65 65 0 0 1 130 0v71",
    strap: "M298 435q105-76 204 0",
    seam: "M309 487q91 32 182 0",
    accent: "#e3c88f", detail: "M365 548h70",
  },
  "petite-arc": {
    background: "#e8e4da", body: "#a58468",
    silhouette: "M305 435h190l-9 235q-1 20-21 20H335q-20 0-21-20l-9-235Z",
    handle: "M321 408c4-153 45-209 79-209s75 56 79 209",
    strap: "M297 450q104-56 206 0",
    seam: "M309 492q91 39 182 0",
    accent: "#dcc79d", detail: "M371 552h58",
  },
  "moonlight-clutch": {
    background: "#e8e0e5", body: "#665766",
    silhouette: "M252 455q148-45 296 0l-12 199q-2 22-24 22H288q-22 0-24-22l-12-199Z",
    handle: "M279 417q121-167 242 0",
    strap: "M279 421q121 32 242 0",
    seam: "M258 457h284",
    accent: "#e1cb99", detail: "M365 530h70",
  },
  "afterglow-pouch": {
    background: "#eee3dd", body: "#b18572",
    silhouette: "M271 462q129-61 258 0l-16 190q-4 40-113 65-109-25-113-65l-16-190Z",
    handle: "M292 431q108-119 216 0",
    strap: "M300 405q101-59 200 0",
    seam: "M279 473q121 55 242 0",
    accent: "#e1cb99", detail: "M374 550h52",
  },
  "weekday-backpack": {
    background: "#e5e3db", body: "#64706a",
    silhouette: "M275 414q0-25 25-25h200q25 0 25 25l18 324q1 28-27 28H284q-28 0-27-28l18-324Z",
    handle: "M348 350v-48a52 52 0 0 1 104 0v48",
    strap: "M252 435q-45 113-28 287M548 435q45 113 28 287",
    seam: "M251 430h298M300 717h200",
    accent: "#d6c092", detail: "M318 544h164",
  },
  "campus-carryall": {
    background: "#e8e0d8", body: "#806a58",
    silhouette: "M283 416q0-24 24-24h186q24 0 24 24l20 319q2 29-27 29H290q-29 0-27-29l20-319Z",
    handle: "M351 346v-47a49 49 0 0 1 98 0v47",
    strap: "M257 432q-47 112-25 286M543 432q47 112 25 286",
    seam: "M262 437h276M303 714h194",
    accent: "#dfc69b", detail: "M318 544h164",
  },
  "weekend-away": {
    background: "#e9e2d8", body: "#8a6b56",
    silhouette: "M227 451q0-27 27-27h292q27 0 27 27l20 266q2 27-25 27H232q-27 0-25-27l20-266Z",
    handle: "M310 380v-60a90 90 0 0 1 180 0v60",
    strap: "M217 457q-46 116-19 248M583 457q46 116 19 248",
    seam: "M227 455h346M247 689h306",
    accent: "#e1c99a", detail: "M344 559h112",
  },
  "long-weekend-duffel": {
    background: "#e5e4dc", body: "#687164",
    silhouette: "M234 456q0-25 25-25h282q25 0 25 25l18 259q2 26-24 26H240q-26 0-24-26l18-259Z",
    handle: "M316 385v-58a84 84 0 0 1 168 0v58",
    strap: "M221 458q-40 112-21 242M579 458q40 112 21 242",
    seam: "M229 459h342M248 692h304",
    accent: "#dfc99c", detail: "M344 560h112",
  },
};

export function HandbagIllustration({ alt, name }: { alt: string; name: string }) {
  const bag = artwork[name] ?? artwork["sunday-tote"];

  return (
    <svg
      aria-hidden={alt ? undefined : true}
      aria-label={alt || undefined}
      className="product-image bag-illustration"
      preserveAspectRatio="xMidYMid slice"
      role={alt ? "img" : undefined}
      viewBox="0 0 800 1000"
    >
      <rect width="800" height="1000" fill={bag.background} />
      <circle cx="400" cy="445" r="252" fill="#ffffff" opacity=".2" />
      <ellipse cx="400" cy="792" rx="207" ry="22" fill="#49313f" opacity=".12" />
      {bag.strap && <path d={bag.strap} fill="none" stroke={bag.body} strokeLinecap="round" strokeWidth="25" />}
      <path d={bag.handle} fill="none" stroke={bag.body} strokeLinecap="round" strokeLinejoin="round" strokeWidth="28" />
      <path d={bag.silhouette} fill={bag.body} stroke="#49313f" strokeOpacity=".13" strokeWidth="3" />
      <path d={bag.seam} fill="none" stroke={bag.accent} strokeLinecap="round" strokeOpacity=".8" strokeWidth="5" />
      <path d={bag.detail} fill="none" stroke={bag.accent} strokeLinecap="round" strokeWidth="9" />
      <circle cx="400" cy="526" r="12" fill={bag.accent} />
      <circle cx="400" cy="526" r="4" fill="#fbf6f3" opacity=".8" />
    </svg>
  );
}
