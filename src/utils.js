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
    //console.log(query);
    const authToken = localStorage.getItem("authToken");
    const uploadPackageUrl = new URL(`${domain}/search/`);
    uploadPackageUrl.searchParams.append("receiver_name", query.name);
    uploadPackageUrl.searchParams.append("weight", query.weight);
    uploadPackageUrl.searchParams.append("height", query.height);
    uploadPackageUrl.searchParams.append("length", query.length);
    uploadPackageUrl.searchParams.append("width", query.width);
    uploadPackageUrl.searchParams.append("pick_up_address", query.pickupaddress);
    uploadPackageUrl.searchParams.append("delivery_address", query.deliveryaddress);

    uploadPackageUrl.searchParams.append(
        "pick_up_time",
        query.pick_up_time.format("YYYY-MM-DDThh:mm:ss")
    );
    console.log(uploadPackageUrl);

    return fetch(uploadPackageUrl, {
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
