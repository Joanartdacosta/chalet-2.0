import db from "@/helpers/dbConnection";

export async function getAllServices() {
  try {
    const allServices = await db.collection("service_id").find({}).toArray();

    return allServices.map((mongoDbItem) => {
      return {
        ...mongoDbItem,
        _id: String(mongoDbItem._id),
        service_details: mongoDbItem.service_details.map((service_detail) =>
          String(service_detail)
        ),
      };
    });
  } catch (e) {
    console.error(e);
  }
}

export async function getByIdService(id) {
  const all = await getAllServices();

  return all.find((item) => item.id === id);
}
