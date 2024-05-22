"use client";
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box } from "@mui/material";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import { deleteArticle } from "@/services/ArticleService";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Link from "next/link";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const Listproducts = ({ produits }) => {
  const router = useRouter();
  const deletearticle = (id) => {
    if (window.confirm("supprimer le produit O/N")) {
      deleteArticle(id)
        .then((res) => {
          console.log(res);
          router.refresh();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "imageart", //access nested data with dot notation
        header: "Image",
        Cell: ({ cell }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Image
              src={cell.getValue()}
              alt="product anme"
              height="50"
              width="50"
            />
          </Box>
        ),
      },
      {
        accessorKey: "reference", //access nested data with dot notation
        header: "Référence",
        size: 100,
      },
      {
        accessorKey: "designation",
        header: "Désignation",
        size: 100,
      },
      {
        accessorKey: "marque", //normal accessorKey
        header: "Marque",
        size: 100,
      },
      {
        accessorKey: "prix",
        header: "Prix",
        size: 100,
      },
      {
        accessorKey: "qtestock",
        header: "Stock",
        size: 100,
      },
      {
        accessorKey: "_id",
        header: "actions",
        size: 100,
        Cell: ({ cell, row }) => (
          <div>
            <Button
              onClick={(e) => {
                deletearticle(cell.row.original._id, e);
              }}
              variant="danger"
              size="md"
              className="text-danger btn-link delete"
            >
              <DeleteForeverIcon />
            </Button>
          </div>
        ),
      },
    ],
    [produits]
  );
  return (
    <div className="container">
      <Button variant="dark" size="sm">
        <Link
          href="/admin/products/newProduct"
          style={{
            textDecoration: "none",
            color: "aqua",
            fontSize: 14,
          }}
        >
          <AddCircleOutlineIcon /> Nouveau
        </Link>
      </Button>
      <MaterialReactTable columns={columns} data={produits} />;
    </div>
  );
};
export default Listproducts;
