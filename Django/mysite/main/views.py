from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')


def contact(request):
    return render(request, 'contact.html')


def login(request):
    return render(request, 'login.html')


def logout(request):
    return render(request, 'logout.html')


def blog(request):
    return render(request, 'blog.html')


def blogs(request, pk):
    return render(request, 'blog.html', {'pk': pk})
