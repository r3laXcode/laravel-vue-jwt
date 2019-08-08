<?php

use Illuminate\Database\Seeder;


use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = factory(User::class, 5)->create();
    }
}
// php artisan db:seed --class=UsersTableSeeder
// autoload
// composer dump-autoload