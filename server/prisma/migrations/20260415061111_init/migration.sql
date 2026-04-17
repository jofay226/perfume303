-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perfume" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Perfume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variants" (
    "id" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "concentration" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "perfumeId" TEXT NOT NULL,

    CONSTRAINT "Variants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- AddForeignKey
ALTER TABLE "Perfume" ADD CONSTRAINT "Perfume_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Variants" ADD CONSTRAINT "Variants_perfumeId_fkey" FOREIGN KEY ("perfumeId") REFERENCES "Perfume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
