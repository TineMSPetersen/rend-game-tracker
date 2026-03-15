import type { Request, Response } from "express-serve-static-core";
import characterModel from "../models/gameplay/character/characterModel.ts";

const UseItem = async (
  req: Request,
  res: Response,
): Promise<Response | void> => {
  try {
    const { characterId, item } = req.body;

    const characterData = await characterModel.findById(characterId);
    if (!characterData) {
      return res.status(404).json({ message: "Character not found" });
    }

    const inventoryItem = characterData.inventory.find(
      (inventory) => inventory.itemId.toString() === item,
    );

    if (!inventoryItem) {
      return res.status(404).json({ message: "Item not found in inventory" });
    }

    if (inventoryItem.amount > 1) {
      await characterModel.findByIdAndUpdate(
        characterId,
        {
          $inc: { "inventory.$[i].amount": -1 },
        },
        {
          arrayFilters: [{ "i.itemId": inventoryItem.itemId }],
          new: true,
        },
      );
    } else {
      await characterModel.findByIdAndUpdate(characterId, {
        $pull: { inventory: { itemId: inventoryItem.itemId } },
      });
    }

    res.json({
      success: true
    })
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { UseItem };
