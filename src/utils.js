const domain = "";

export const uploadPackage = (query) => {
    const authToken = localStorage.getItem("authToken");
    const uploadPackageUrl = new URL(`${domain}/search/`);
    uploadPackageUrl.searchParams.append("weight", query.weight);
    uploadPackageUrl.searchParams.append("height", query.height);
    uploadPackageUrl.searchParams.append("length", query.length);
    uploadPackageUrl.searchParams.append("width", query.width);
    uploadPackageUrl.searchParams.append("pickupaddress", query.pickup_address);
    uploadPackageUrl.searchParams.append("deliveryaddress", query.delivery_address);
    uploadPackageUrl.searchParams.append(
      "pickuptime",
      query.pick_up_time.format("YYYY-MM-DD hh:mm:ss")
    );
 
    return fetch(uploadPackageUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      if (response.status !== 200) {
        throw Error("Fail to upload new package");
      }

      return response.json();
    });
};
