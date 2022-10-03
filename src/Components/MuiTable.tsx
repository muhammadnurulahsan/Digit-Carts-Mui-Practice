import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              #No
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              First Name
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Last Name
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Email
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Gender
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Ip Address
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td,&:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.first_name}</TableCell>
              <TableCell align="center">{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">{row.ip_address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Roch",
    last_name: "Chatainier",
    email: "rchatainier0@ustream.tv",
    gender: "Female",
    ip_address: "191.135.69.69",
  },
  {
    id: 2,
    first_name: "Fields",
    last_name: "Pendall",
    email: "fpendall1@elpais.com",
    gender: "Polygender",
    ip_address: "162.204.133.150",
  },
  {
    id: 3,
    first_name: "Sheeree",
    last_name: "Mariyushkin",
    email: "smariyushkin2@sogou.com",
    gender: "Female",
    ip_address: "252.34.193.194",
  },
  {
    id: 4,
    first_name: "Averill",
    last_name: "Ganter",
    email: "aganter3@weebly.com",
    gender: "Male",
    ip_address: "187.37.127.8",
  },
  {
    id: 5,
    first_name: "Helsa",
    last_name: "Posthill",
    email: "hposthill4@flickr.com",
    gender: "Female",
    ip_address: "124.136.135.49",
  },
  {
    id: 6,
    first_name: "Randene",
    last_name: "Girardin",
    email: "rgirardin5@lycos.com",
    gender: "Female",
    ip_address: "121.162.170.157",
  },
  {
    id: 7,
    first_name: "Antoni",
    last_name: "Washbrook",
    email: "awashbrook6@netscape.com",
    gender: "Male",
    ip_address: "199.57.207.233",
  },
  {
    id: 8,
    first_name: "Alla",
    last_name: "Fancy",
    email: "afancy7@deviantart.com",
    gender: "Female",
    ip_address: "209.81.255.141",
  },
  {
    id: 9,
    first_name: "Faydra",
    last_name: "Tuohy",
    email: "ftuohy8@apple.com",
    gender: "Female",
    ip_address: "157.118.129.38",
  },
  {
    id: 10,
    first_name: "Alfy",
    last_name: "Tollemache",
    email: "atollemache9@sogou.com",
    gender: "Male",
    ip_address: "217.198.116.156",
  },
  {
    id: 11,
    first_name: "Corby",
    last_name: "Handford",
    email: "chandforda@google.co.jp",
    gender: "Male",
    ip_address: "69.204.30.137",
  },
  {
    id: 12,
    first_name: "Emalia",
    last_name: "Lovel",
    email: "elovelb@issuu.com",
    gender: "Female",
    ip_address: "199.90.17.183",
  },
  {
    id: 13,
    first_name: "Lou",
    last_name: "Semeradova",
    email: "lsemeradovac@usgs.gov",
    gender: "Male",
    ip_address: "247.39.47.111",
  },
  {
    id: 14,
    first_name: "Britney",
    last_name: "Abatelli",
    email: "babatellid@umn.edu",
    gender: "Female",
    ip_address: "200.60.181.219",
  },
  {
    id: 15,
    first_name: "Allyce",
    last_name: "Twamley",
    email: "atwamleye@latimes.com",
    gender: "Female",
    ip_address: "147.188.26.49",
  },
  {
    id: 16,
    first_name: "Lona",
    last_name: "Scalia",
    email: "lscaliaf@ca.gov",
    gender: "Female",
    ip_address: "68.92.108.173",
  },
  {
    id: 17,
    first_name: "Tabbi",
    last_name: "Briat",
    email: "tbriatg@sohu.com",
    gender: "Female",
    ip_address: "194.171.2.218",
  },
  {
    id: 18,
    first_name: "Barbara",
    last_name: "Calloway",
    email: "bcallowayh@smh.com.au",
    gender: "Female",
    ip_address: "202.233.85.219",
  },
  {
    id: 19,
    first_name: "Virge",
    last_name: "Sanbrooke",
    email: "vsanbrookei@gov.uk",
    gender: "Male",
    ip_address: "137.24.229.128",
  },
  {
    id: 20,
    first_name: "King",
    last_name: "Alliband",
    email: "kallibandj@jugem.jp",
    gender: "Male",
    ip_address: "1.218.77.211",
  },
  {
    id: 21,
    first_name: "Hastings",
    last_name: "Bellam",
    email: "hbellamk@weebly.com",
    gender: "Male",
    ip_address: "57.207.201.115",
  },
  {
    id: 22,
    first_name: "Alisa",
    last_name: "Chung",
    email: "achungl@biblegateway.com",
    gender: "Female",
    ip_address: "191.101.148.4",
  },
  {
    id: 23,
    first_name: "Anton",
    last_name: "Cometson",
    email: "acometsonm@dell.com",
    gender: "Male",
    ip_address: "202.164.153.155",
  },
  {
    id: 24,
    first_name: "Robbie",
    last_name: "Loch",
    email: "rlochn@springer.com",
    gender: "Female",
    ip_address: "25.195.247.198",
  },
  {
    id: 25,
    first_name: "Almeria",
    last_name: "Dragonette",
    email: "adragonetteo@shop-pro.jp",
    gender: "Female",
    ip_address: "6.0.179.229",
  },
  {
    id: 26,
    first_name: "Alfons",
    last_name: "Haslewood",
    email: "ahaslewoodp@livejournal.com",
    gender: "Male",
    ip_address: "220.235.103.135",
  },
  {
    id: 27,
    first_name: "Riccardo",
    last_name: "Bilsborrow",
    email: "rbilsborrowq@intel.com",
    gender: "Male",
    ip_address: "198.80.210.229",
  },
  {
    id: 28,
    first_name: "Nicoline",
    last_name: "Hacon",
    email: "nhaconr@wsj.com",
    gender: "Genderqueer",
    ip_address: "33.22.199.33",
  },
  {
    id: 29,
    first_name: "Lorrayne",
    last_name: "Loakes",
    email: "lloakess@springer.com",
    gender: "Female",
    ip_address: "92.40.91.245",
  },
  {
    id: 30,
    first_name: "Chucho",
    last_name: "Khrishtafovich",
    email: "ckhrishtafovicht@desdev.cn",
    gender: "Male",
    ip_address: "185.156.103.255",
  },
  {
    id: 31,
    first_name: "Conroy",
    last_name: "Shulem",
    email: "cshulemu@deviantart.com",
    gender: "Genderqueer",
    ip_address: "160.145.207.216",
  },
  {
    id: 32,
    first_name: "Marysa",
    last_name: "Cantero",
    email: "mcanterov@feedburner.com",
    gender: "Female",
    ip_address: "82.77.1.215",
  },
  {
    id: 33,
    first_name: "Prescott",
    last_name: "Doeg",
    email: "pdoegw@google.ca",
    gender: "Male",
    ip_address: "214.226.22.103",
  },
  {
    id: 34,
    first_name: "Tresa",
    last_name: "Luxen",
    email: "tluxenx@xinhuanet.com",
    gender: "Non-binary",
    ip_address: "49.194.78.81",
  },
  {
    id: 35,
    first_name: "Bartholomew",
    last_name: "Wormald",
    email: "bwormaldy@slideshare.net",
    gender: "Male",
    ip_address: "182.14.42.58",
  },
  {
    id: 36,
    first_name: "Sela",
    last_name: "Minihane",
    email: "sminihanez@rediff.com",
    gender: "Female",
    ip_address: "56.199.136.187",
  },
  {
    id: 37,
    first_name: "Ingelbert",
    last_name: "Gilbody",
    email: "igilbody10@usnews.com",
    gender: "Male",
    ip_address: "30.235.47.74",
  },
  {
    id: 38,
    first_name: "Aggy",
    last_name: "Heijne",
    email: "aheijne11@va.gov",
    gender: "Polygender",
    ip_address: "32.253.228.142",
  },
  {
    id: 39,
    first_name: "Harrietta",
    last_name: "Merrett",
    email: "hmerrett12@state.tx.us",
    gender: "Female",
    ip_address: "51.232.8.227",
  },
  {
    id: 40,
    first_name: "Findlay",
    last_name: "Jenson",
    email: "fjenson13@reverbnation.com",
    gender: "Male",
    ip_address: "225.162.228.72",
  },
  {
    id: 41,
    first_name: "Carey",
    last_name: "Strowlger",
    email: "cstrowlger14@wordpress.org",
    gender: "Male",
    ip_address: "229.114.168.85",
  },
  {
    id: 42,
    first_name: "Christabel",
    last_name: "Jowitt",
    email: "cjowitt15@nationalgeographic.com",
    gender: "Polygender",
    ip_address: "253.53.142.14",
  },
  {
    id: 43,
    first_name: "Haskell",
    last_name: "Dade",
    email: "hdade16@storify.com",
    gender: "Male",
    ip_address: "198.32.56.77",
  },
  {
    id: 44,
    first_name: "Jacquelyn",
    last_name: "Vyel",
    email: "jvyel17@examiner.com",
    gender: "Non-binary",
    ip_address: "236.244.184.177",
  },
  {
    id: 45,
    first_name: "Allan",
    last_name: "MacNeish",
    email: "amacneish18@macromedia.com",
    gender: "Male",
    ip_address: "120.253.238.216",
  },
  {
    id: 46,
    first_name: "Fran",
    last_name: "Fackney",
    email: "ffackney19@wired.com",
    gender: "Male",
    ip_address: "219.46.246.191",
  },
  {
    id: 47,
    first_name: "Marcos",
    last_name: "Gommery",
    email: "mgommery1a@github.io",
    gender: "Male",
    ip_address: "63.232.140.199",
  },
  {
    id: 48,
    first_name: "Jerrine",
    last_name: "De Few",
    email: "jdefew1b@dropbox.com",
    gender: "Female",
    ip_address: "63.137.63.216",
  },
  {
    id: 49,
    first_name: "Muire",
    last_name: "Martinyuk",
    email: "mmartinyuk1c@merriam-webster.com",
    gender: "Female",
    ip_address: "13.92.182.32",
  },
  {
    id: 50,
    first_name: "Rinaldo",
    last_name: "Torresi",
    email: "rtorresi1d@icio.us",
    gender: "Male",
    ip_address: "164.255.55.23",
  },
];
