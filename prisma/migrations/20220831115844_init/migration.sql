-- CreateTable
CREATE TABLE "message" (
    "id" SERIAL NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "originConnector" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "coding" TEXT NOT NULL,
    "validity" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);
