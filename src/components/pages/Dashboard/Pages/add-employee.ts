export const uploadImageAndGetUrl = async (image: File) => {
  const formData = new FormData();
  formData.set("file", image);

  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/upload`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};
