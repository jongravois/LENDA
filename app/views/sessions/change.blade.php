@extends('layouts/appmain');

@section('content')
    @if (Session::has('flash_notification.message'))
        <div class="alert alert-{{ Session::get('flash_notification.level') }}">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>

            {{ Session::get('flash_notification.message') }}
        </div>
    @endif

    <h3>
        {{ Auth::user()->username . ",<br> You must change your password!" }}
    </h3>

    <form action="{{ url('/password') }}" method="POST">

    <!-- Password Input -->
    <div class="form-group">
        {{ Form::label( 'password', 'New Password:') }}
        {{ Form::password( 'password', ['class' => 'form-control']) }}
    </div>

    <!-- Password Input 2 -->
    <div class="form-group">
        {{ Form::label( 'password2', 'Confirm Password:') }}
        {{ Form::password( 'password2', ['class' => 'form-control']) }}
    </div>

    <!-- Submit Button -->
    <div class="form-group">
        <div class="col-lg-offset-2 col-lg-10">
            <input type="submit" class="btn btn-primary" name="submit" value="Change"/>
        </div>
    </div>

    {{ Form::close() }}
@stop