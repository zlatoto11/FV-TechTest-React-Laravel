<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            // $table->id();
            // $table->string('name');
            // $table->string('email')->unique();
            // $table->timestamp('email_verified_at')->nullable();
            // $table->string('password');
            // $table->rememberToken();
            // $table->timestamps();

            $table->id(); //Required
            $table->string('firstName'); //Required
            $table->string('lastName'); //Required 
            $table->string('email', 320); //Required and must be valid e.g. name@example.com. 64 characters for the "local part" (username). 1 character for the @ symbol. 255 characters for the domain name
            $table->string('mobileNumber'); //Required and valid.
            $table->enum('gender', ['Male', 'Female', 'Other']); //Required
            $table->date('dateOfBirth'); //Required and must follow pattern of dd/mm/yyyy e.g. 02/11/1990
            $table->string('comments'); // Can be empty
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
