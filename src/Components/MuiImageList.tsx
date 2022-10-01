import {
  ImageList,
  ImageListItem,
  Stack,
  Box,
  ImageListItemBar,
} from "@mui/material";

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              loading="lazy"
              alt={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        variant="woven"
        gap={8}
        sx={{ width: 500, height: 450 }}
        cols={3}
        rowHeight={164}
      >
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              loading="lazy"
              alt={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 450 }}>
        <ImageList cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                loading="lazy"
                alt={item.title}
              />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData3.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                loading="lazy"
                alt={item.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1586816001966-79b736744398",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1489516917245-377a51e7b292",
    title: "Pistachio Cake",
  },
  {
    img: "https://images.unsplash.com/photo-1488573783607-039006e42465",
    title: "Dominican",
  },
  {
    img: "https://images.unsplash.com/photo-1533987421531-3931cd34625d",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1515332362415-ee763c974cce",
    title: "COOKING",
  },
  {
    img: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909",
    title: "Cold Drinks",
  },
];

const itemData2 = [
  {
    img: "https://images.unsplash.com/photo-1586816001966-79b736744398",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1489516917245-377a51e7b292",
    title: "Pistachio Cake",
  },
  {
    img: "https://images.unsplash.com/photo-1488573783607-039006e42465",
    title: "Dominican",
  },
  {
    img: "https://images.unsplash.com/photo-1533987421531-3931cd34625d",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1515332362415-ee763c974cce",
    title: "COOKING",
  },
  {
    img: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909",
    title: "Cold Drinks",
  },
];
const itemData3 = [
  {
    img: "https://images.unsplash.com/photo-1586816001966-79b736744398",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1489516917245-377a51e7b292",
    title: "Pistachio Cake",
  },
  {
    img: "https://images.unsplash.com/photo-1489516917245-377a51e7b292",
    title: "Pistachio Cake",
  },
  {
    img: "https://images.unsplash.com/photo-1489516917245-377a51e7b292",
    title: "Pistachio Cake",
  },
  {
    img: "https://images.unsplash.com/photo-1489516917245-377a51e7b292",
    title: "Pistachio Cake",
  },
  {
    img: "https://images.unsplash.com/photo-1488573783607-039006e42465",
    title: "Dominican",
  },
  {
    img: "https://images.unsplash.com/photo-1533987421531-3931cd34625d",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1515332362415-ee763c974cce",
    title: "COOKING",
  },
  {
    img: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909",
    title: "Cold Drinks",
  },
];
