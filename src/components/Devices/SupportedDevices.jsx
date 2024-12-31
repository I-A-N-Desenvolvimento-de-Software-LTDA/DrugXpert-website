import React from 'react';

const SupportedDevices = () => {
  return (
    <div className="font-sans p-6 leading-relaxed bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Supported Devices</h1>
      <p className="mb-6">
        Our application supports a wide range of devices to ensure compatibility and smooth performance across platforms. Below is an overview of supported devices for iOS, Android, and Desktop systems. Whether you are using a smartphone, tablet, or desktop, our app provides a seamless experience tailored to your device's capabilities.
      </p>

      <h2 className="text-2xl font-semibold mb-2">iOS Devices</h2>
      <img src="/assets/devices/ios-devices.png" alt="iOS Devices" className="w-32 h-32 mb-4 rounded " />
      <ul className="list-disc list-inside mb-4">
        <li>iPhone SE (2nd generation) and newer</li>
        <li>iPad (5th generation and newer)</li>
        <li>iOS version 14.0 and above</li>
      </ul>
      <p className="mb-6">
        Our app is optimized for mobile devices running iOS 14.0 or newer. It leverages features such as Face ID, Touch ID, and ARKit where available. For older models, the app will still function but may lack certain enhancements available on newer hardware. Regular updates from Apple help ensure a secure and reliable experience.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Android Devices</h2>
      <img src="/assets/devices/android-devices.png" alt="Android Devices" className="w-32 h-32 mb-4 rounded " />
      <ul className="list-disc list-inside mb-4">
        <li>Devices with Android 8.0 (Oreo) and above</li>
        <li>Minimum 2GB RAM</li>
        <li>Screen resolution of 720p or higher</li>
      </ul>
      <p className="mb-6">
        Please note that due to the wide variety of Android devices, performance may vary depending on the specific hardware and software configuration of your device. Our app is optimized for the most popular Android devices, ensuring compatibility with major manufacturers such as Samsung, Google, OnePlus, and Xiaomi. For the best experience, keep your device updated with the latest Android patches and clear app cache regularly.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Desktop Systems</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">Windows</h3>
      <img src="/assets/devices/windows-devices.png" alt="Windows Devices" className="w-32 h-32 mb-4 rounded " />
      <ul className="list-disc list-inside mb-4">
        <li>Windows 10 and newer</li>
        <li>Minimum 4GB RAM</li>
        <li>Processor: Intel i3 or equivalent and above</li>
      </ul>
      <p className="mb-6">
        Ensure your system has the latest Windows updates installed. For the best performance, a dedicated graphics card and SSD storage are recommended.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Mac</h3>
      <img src="/assets/devices/mac-devices.png" alt="Mac Devices" className="w-32 h-32 mb-4 rounded " />
      <ul className="list-disc list-inside mb-4">
        <li>macOS 11.0 (Big Sur) and newer</li>
        <li>Devices with Apple Silicon (M1, M2) or Intel processors</li>
        <li>Minimum 4GB RAM</li>
      </ul>
      <p className="mb-6">
        Our app is optimized for the latest macOS versions, including support for Apple Silicon chips, ensuring better performance and energy efficiency. Users can also benefit from features like Handoff and iCloud integration for a seamless ecosystem experience.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Linux</h3>
      <img src="/assets/devices/linux-devices.png" alt="Linux Devices" className="w-32 h-32 mb-4 rounded " />
      <ul className="list-disc list-inside mb-4">
        <li>Ubuntu 20.04 and newer, Fedora 33 and newer</li>
        <li>Kernel version 5.4 and above</li>
        <li>Minimum 4GB RAM</li>
      </ul>
      <p className="mb-6">
        The app supports popular Linux distributions. For installation, ensure that all necessary dependencies are met, and consider using a modern desktop environment like GNOME or KDE for the best experience. Our application also benefits from Linux's stability and flexibility, making it an excellent choice for power users and developers.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Additional Information</h2>
      <p className="mb-4">
        If your device is not listed or you are experiencing issues, please contact our support team for further assistance. We are constantly working to expand our list of supported devices and improve the app experience for all users. Our development team regularly tests the app on new devices and operating systems to ensure compatibility and optimal performance. Feedback from users helps us prioritize support for devices that matter most to our community.
      </p>
      <p className="mb-6">
        Additionally, some features of the app may require specific hardware capabilities, such as GPS, camera, or NFC. If your device lacks these features, certain functionalities might be limited. Make sure to review the app's permissions and system requirements to get the most out of your experience.
      </p>
      <p>
        Regular updates to our app not only introduce new features but also enhance security and compatibility. It is highly recommended to enable automatic updates to ensure you are always running the latest version.
      </p>
    </div>
  );
};

export default SupportedDevices;
