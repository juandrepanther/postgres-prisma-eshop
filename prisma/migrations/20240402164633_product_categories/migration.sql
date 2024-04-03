-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('SOFA', 'CHAIR', 'MUG', 'POT', 'BED_SET');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "category" "ProductCategory",
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "previousPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "outOfStock" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
