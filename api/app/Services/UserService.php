<?php

namespace App\Services;


use App\Repositories\UserRepo;

/**
 * Class UserService
 * @package App\Services
 */
class UserService
{
    /**
     * @var UserRepo
     */
    private $userRepo;

    public function __construct(UserRepo $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    /**
     * @param $params
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function findAll($params)
    {
        $limit = $params['limit'] ?? 10;
        return $this->userRepo->findAll((int)$limit);
    }
}
