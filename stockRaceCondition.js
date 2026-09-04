async function requestStock(db, materialName, qty) {
  try {
    const result = await db
      .collection("stocks")
      .findOneAndUpdate(
        { material: materialName, available: { $gte: qty } },
        { $inc: { available: -qty } },
        { returnDocument: "after" },
      );

    if (!result.value) {
      return {
        success: false,
        message: "Insufficient stock or request rejected",
      };
    }
    return { success: true, remaining: result.value.available };
  } catch (error) {
    console.error("Error when requesting stock", error);
    throw error;
  }
}
