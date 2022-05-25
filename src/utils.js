const domain = "";


export const login = (credential, asHost) => {
  const loginUrl = `${domain}/authenticate/${asHost ? "admin" : "guest"}`;
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to log in");
    }
 
    return response.json();
  });
};
 
//login page register
export const register = (credential, asHost) => {
  const registerUrl = `${domain}/register/${asHost ? "admin" : "guest"}`;
  return fetch(registerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  }).then((response) => {
    if (response.status !== 200) {
      throw Error("Fail to register");
    }
  });
};

 

export const uploadPackage = (query) => {
    const authToken = localStorage.getItem("authToken");
    // const uploadPackageUrl = new URL(`${domain}/search/`);
    // uploadPackageUrl.searchParams.append("receiver_name", query.recipientname);
    // uploadPackageUrl.searchParams.append("weight", query.weight);
    // uploadPackageUrl.searchParams.append("height", query.height);
    // uploadPackageUrl.searchParams.append("length", query.length);
    // uploadPackageUrl.searchParams.append("width", query.width);
    // uploadPackageUrl.searchParams.append("pick_up_address", query.pickupaddress);
    // uploadPackageUrl.searchParams.append("delivery_address", query.deliveryaddress);

    // uploadPackageUrl.searchParams.append(
    //     "pick_up_time",
    //     query.pickuptime.format("YYYY-MM-DDThh:mm:ss")
    // );
    const uploadURL = `${domain}/search/?receiver_name=${query.recipientname}&weight=${query.weight}&height=${query.height}&length=${query.length}&width=${query.width}&pick_up_address=${query.pickupaddress}&delivery_address=${query.deliveryaddress}&pick_up_time=${query.pickuptime.format("YYYY-MM-DDThh:mm:ss")}`;

    return fetch(uploadURL, {
      method: "GET",
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
