import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="Breadcrumbs">
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography>Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs aria-label="Breadcrumbs" separator="-">
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography>Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs
        aria-label="Breadcrumbs"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography>Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs
        aria-label="Breadcrumbs"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography>Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs
        aria-label="Breadcrumbs"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
        itemsBeforeCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography>Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs
        aria-label="Breadcrumbs"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
