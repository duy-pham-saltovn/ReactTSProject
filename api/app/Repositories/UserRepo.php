<?php


namespace App\Repositories;


use App\Models\User;

class UserRepo extends EloquentRepo
{
    /**
     * @inheritDoc
     */
    public function getModel()
    {
        return User::class;
    }

    /**
     * @param $limit
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function findAll($limit)
    {
        return $this->model->with(['posts'])->limit($limit)->get();
    }
}
