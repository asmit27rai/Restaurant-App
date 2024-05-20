import { Table } from "../models/tableModel.js";
import { Order } from "../models/orderModel.js";

export const booking = async (res, req) => {
  try {
    const { fullName, email, numTab, numMem, phone } = req.body;

    await Table.create({
      fullName,
      email,
      numTab,
      numMem,
      phone
    });

    return res.status(201).json({
      message: "Table Booked Successfully.",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const order = async (res, req) => {
    try {
        const { address, numDis, totPri } = req.body;
    
        await Order.create({
          address,
          numDis,
          totPri
        });
    
        return res.status(201).json({
          message: "Order Placed Successfully.",
          success: true,
        });
      } catch (err) {
        console.log(err);
      }
};
