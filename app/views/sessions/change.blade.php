@extends('layouts/appmain');

@section('content')
    <h3>
        {{ Auth::user()->username . ",<br> You must change your password!" }}
    </h3>

    {{ Form::open( ['route' => 'sessions.password'] ) }}

    <!-- Password Input -->
    <div class="form-group">
        {{ Form::label( 'password', 'New Password:') }}
        {{ Form::text( 'password', null, array('class' => 'form-control')) }}
    </div>

    <!-- Password Input 2 -->
    <div class="form-group">
        {{ Form::label( 'password2', 'Confirm Password:') }}
        {{ Form::password( 'password2', array('class' => 'form-control')) }}
    </div>

    <!-- Submit Button -->
    <div class="form-group">
        <div class="col-lg-offset-2 col-lg-10">
            @if (Auth::guest())
                <button type="submit" class="btn btn-primary">LOG IN</button>
            @else
                <a class="btn btn-primary" href="logout">LOG OUT</a>
            @endif
        </div>
    </div>

    {{ Form::close() }}
@stop