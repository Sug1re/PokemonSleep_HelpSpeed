"use client";

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

export type Payment = {
    id: string;
    おてつだい時間: number;
    ポケモン: string;
    メインスキル: string;
    睡眠タイプ: string;
    得意なもの: string;
  }

export const columns: ColumnDef<Payment>[] = [
    //CheckboxのCSS
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //       <Checkbox
    //         checked={
    //           table.getIsAllPageRowsSelected() ||
    //           (table.getIsSomePageRowsSelected() && "indeterminate")
    //         }
    //         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //         aria-label="Select all"
    //       />
    //     ),
    //     cell: ({ row }) => (
    //       <Checkbox
    //         checked={row.getIsSelected()}
    //         onCheckedChange={(value) => row.toggleSelected(!!value)}
    //         aria-label="Select row"
    //       />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    //   },
    //ポケモン＋ポケモン図鑑
  {
    accessorKey: "ポケモン",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="px-0"
          >
            ポケモン
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    // cell: ({ row }) => {
    //     return (
    //         const pokemon = parseFloat(row.getValue("ポケモン"));
    //         <div className=" flex items-center">
    //             <div className=" bg-001-bg">{pokemon}</div>
    //         </div>
    //     )
    // }
  },
  {
    accessorKey: "きのみ",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          きのみ
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "食材",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          食材
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "得意なもの",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          得意なもの
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  //第一食材
  //第二食材
  //第三食材
  {
    accessorKey: "睡眠タイプ",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          睡眠タイプ
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "メインスキル",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-0"
        >
          メインスキル
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "おてつだい時間",
    header: ({ column }) => {
        return (
          <div className="text-right">
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="px-0"
            >
              おてつだい時間
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        );
      },
    cell: ({ row }) => {
    const speed = parseFloat(row.getValue("おてつだい時間"));
    const formatted = speed.toLocaleString("en-US");
      return <div className="text-right font-medium pr-4">{formatted}</div>
    },
  },
]
