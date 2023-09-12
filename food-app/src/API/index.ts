import { LIMIT_DISPLAY_ITEM_PER_PAGE, STORAGE_ACCESS_TOKEN_KEY } from './../ultils/constants';
import { IFood, IGetFoodRequest, IGetFoodResponse, INewFood, INewOrder, INewOrderItem, IOrder, ITable } from "../../type";
import Request, { IRequest } from "./request";
import { message } from "antd";
import { IAdmin } from "../../type";
import { generateJWT } from "./jwt";


export const getTable = async (inUsed?: boolean): Promise<ITable[]> => {
  const payload: IRequest = {
    method: "GET",
    path: "table",
  }
  if (inUsed !== undefined || inUsed !== null) {
    payload.query = {
      in_used: inUsed
    } 
  }

  const resp = await Request.send(payload)
  if (resp.status === 200) {
    return resp.data as ITable[]
  } else {
    return [] as ITable[]
  }
}

export const login = async (email: string, password: string): Promise<IAdmin | null> => {
  const payload: IRequest = {
    method: "GET",
    path: "admin",
    query: {
      email: email,
      password: password
    }
  }

  const resp = await Request.send(payload)

  if (resp.status === 200 && resp.data?.length > 0) {
    const data = {
      email: resp.data[0].email,
      full_name: resp.data[0].full_name,
    } as IAdmin;
    const token = await generateJWT(data);
    window.localStorage.setItem(STORAGE_ACCESS_TOKEN_KEY, token);
    return data;
  } else {
    message.warning("Invalid credential!");
    return null;
  }
}  

export const createNewFood = async (data: INewFood): Promise<IFood | null> => {
  const payload: IRequest = {
    method: "POST",
    path: "food",
    data: data
  };

  const resp = await Request.send(payload);
  if (resp.status === 201) {
    return resp.data as IFood;
  } else {
    message.error("Create food failed!")
    return null;
  }
};

export const getDetailInfoFoodById = async (id: number): Promise<IFood | null> => {
  const payload: IRequest = {
    method: "GET",
    path: "food",
    query: {
      id: id,
    }
  }

  const resp = await Request.send(payload)
  if (resp.status === 200) {
    return resp.data[0] as IFood
  } else {
    return null
  }
}

export const updateInfoFoodById = async (data: IFood): Promise<IFood | null> => {
  const payload: IRequest = {
    method: "PATCH",
    path: `food/${data.id}`,
    data: data
  };

  const resp = await Request.send(payload);
  if (resp.status === 200) {
    return resp.data as IFood;
  } else {
    message.error("Update food failed!")
    return null;
  }
};



export const getFood = async ({
  tag = "Hot Dish",
  skip = 0,
  limit = LIMIT_DISPLAY_ITEM_PER_PAGE,
}: IGetFoodRequest): Promise<IGetFoodResponse> => {
  const payload: IRequest = {
    method: "GET",
    path: `food`,
    query: {
      "_start": skip,
      "_limit": limit,
      "tag":tag
    }
  };

  const resp = await Request.send(payload);
  if (resp.status === 200) {
    return {
      data: resp.data as IFood[],
      total: resp.total as number
    };
  } else {
    return {
      data: [],
      total: 0
    };
  }
}

export const createOrder = async (data: INewOrder): Promise<IOrder | undefined> => {
  const payload: IRequest = {
    method: "POST",
    path: "order",
    data: data
  };

  const resp = await Request.send(payload);
  if (resp.status === 201) {
    return resp.data;
  } else {
    message.error("Payment failed!")
    return undefined;
  }
}

export const createOrderItem = async (data: INewOrderItem[]): Promise<boolean> => {
  const payload: IRequest = {
    method: "POST",
    path: "order_item",
    data: data
  };

  const resp = await Request.send(payload);
  if (resp.status === 201) {
    return true;
  } else {
    message.error("Payment failed!")
    return false;
  }
}








export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};
