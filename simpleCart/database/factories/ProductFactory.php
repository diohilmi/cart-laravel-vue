<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //name
            "name"=> $this->faker->word,
            //description
            "description"=>$this->faker->sentence,
            //price
            "price"=> $this->faker->randomFloat(2, 10000, 90000),
            //image
            "image"=> $this->faker->imageUrl(320, 240, 'technics', true, 'png'),
        ];
    }
}
