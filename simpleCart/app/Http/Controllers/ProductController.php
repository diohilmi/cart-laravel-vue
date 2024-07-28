<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //index
    public function index(Request $request)
    {
        $products = Product::orderBy("id","desc")->paginate(9);
        return response()->json([
            'status' => 'success',
            'message' => 'Products retrieved successfully',
            'data' => $products
        ], 200);
    }
}
