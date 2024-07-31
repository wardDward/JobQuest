<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApplyJobController extends Controller
{
    public function store(Request $request)
    {

        $data = $request->validate([
            'job_post_id' => 'required|integer'
        ]);

        $auth = auth()->user()->id;

        $applied = DB::table('resume_users')->insert([
            'user_id' => $auth,
            'job_post_id' => $data['job_post_id'],
            'created_at' => now(),
            'updated_at' => now()
        ]);

        return response()->json([
            'applied' => $applied
        ]);
    }

    public function delete($id)
    {

        $existed = DB::table('resume_users')
            ->where('user_id', auth()->user()->id)
            ->where('job_post_id', $id)
            ->delete();

        return response()->json([
            'deleted' => $existed
        ]);
    }
    
}
